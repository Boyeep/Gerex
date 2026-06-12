package main

var mockMabaRecords = []MabaRecord{
	{
		NRP:    "5025241001",
		Name:   "Raka Pradana",
		Gugus:  "Gugus Arunika",
		Region: "Surabaya Barat",
	},
	{
		NRP:    "5025241002",
		Name:   "Nadia Maharani",
		Gugus:  "Gugus Cakrawala",
		Region: "Surabaya Timur",
	},
	{
		NRP:    "5025241003",
		Name:   "Fajar Akbar",
		Gugus:  "Gugus Samudra",
		Region: "Gresik - Sidoarjo",
	},
	{
		NRP:    "5025251154",
		Name:   "Boy Steven Benaya Aritonang",
		Gugus:  "Gugus Arunika",
		Region: "Surabaya Pusat",
	},
}

var recordIndex = buildRecordIndex(mockMabaRecords)

func buildRecordIndex(records []MabaRecord) map[string]MabaRecord {
	index := make(map[string]MabaRecord, len(records))
	for _, record := range records {
		index[record.NRP] = record
	}
	return index
}
