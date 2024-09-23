package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {
	log.SetPrefix("greetings: ")
	log.SetFlags(0)
	names := []string{"Nathan", "Samantha", "Darrin"}

	greetings_map, err := greetings.Hellos(names)

	if err != nil {
		log.Fatal(err)
	}

	for _, name := range names {
		fmt.Println(greetings_map[name])
	}

}
