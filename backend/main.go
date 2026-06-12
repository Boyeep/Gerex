package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
)

type MabaRecord struct {
	NRP    string `json:"nrp"`
	Name   string `json:"name"`
	Gugus  string `json:"gugus"`
	Region string `json:"region"`
}

type CheckerRequest struct {
	NRP string `json:"nrp"`
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/health", healthHandler)
	mux.HandleFunc("/api/gugus-checker", gugusCheckerHandler)

	log.Println("gugus checker running on :8080")
	if err := http.ListenAndServe(":8080", withCORS(mux)); err != nil {
		log.Fatal(err)
	}
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{
			"message": "method not allowed",
		})
		return
	}

	writeJSON(w, http.StatusOK, map[string]string{
		"message": "ok",
	})
}

func gugusCheckerHandler(w http.ResponseWriter, r *http.Request) {
	var nrp string

	switch r.Method {
	case http.MethodGet:
		nrp = strings.TrimSpace(r.URL.Query().Get("nrp"))
	case http.MethodPost:
		var req CheckerRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]string{
				"message": "invalid request body",
			})
			return
		}
		nrp = strings.TrimSpace(req.NRP)
	default:
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{
			"message": "method not allowed",
		})
		return
	}

	if nrp == "" {
		writeJSON(w, http.StatusBadRequest, map[string]string{
			"message": "nrp is required",
		})
		return
	}

	record, ok := recordIndex[nrp]
	if !ok {
		writeJSON(w, http.StatusNotFound, map[string]string{
			"message": "maba data not found",
		})
		return
	}

	writeJSON(w, http.StatusOK, record)
}

func withCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(payload); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
