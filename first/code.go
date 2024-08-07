package main


import (
	"fmt"
	"example.com/greetings"
)

func main(){
	message := greetings.Hello("Nate")

	fmt.Println(message)
}