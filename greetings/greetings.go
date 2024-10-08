package greetings

import (
	"errors"
	"fmt"
	"math/rand"
)

func Hello(name string) (string, error) {
	if name == "" {
		return name, errors.New("name must not be empty")
	}

	message := fmt.Sprintf(randomFormat(), name)
	return message, nil

}

func randomFormat() string {

	//a slice of message formats
	formats := []string{
		"Hi, %v. Welcome",
		"Great to See you, %v!",
		"Hail, %v Well met!",
	}

	return formats[rand.Intn(len(formats))]
}

func Hellos(names []string) (map[string]string, error) {

	messages := make(map[string]string)

	for _, name := range names {
		message, err := Hello(name)

		if err != nil {
			return nil, err
		}

		messages[name] = message
	}

	return messages, nil
}
