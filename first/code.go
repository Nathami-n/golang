package main


import (
	"fmt"
	"example.com/greetings"
	"log"
)

func main(){
	
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	names := []string {"Nathan", "George", "Festus", "EP"}

	list, err := greetings.Hellos(names)

	if err != nil {
		log.Fatal(err)
	}


	fmt.Println(list)
}