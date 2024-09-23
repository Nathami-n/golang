package main

import (
	"fmt"
	"time"
)

func printNumber() {
	for i :=1; i<=5; i++ {
		fmt.Println(i)
		time.Sleep((time.Second))
	}
}


func main() {
	go printNumber() //start the goroutine
	fmt.Println("Started goroutine")

	time.Sleep(5 * time.Second)


}