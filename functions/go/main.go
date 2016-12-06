package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/apex/apex"
)

type message struct {
	Hello string `json:"hello"`
}

func main() {
	apex.HandleFunc(func(event json.RawMessage, ctx *apex.Context) (interface{}, error) {
		var m message

		// have to wrtie to STDERR for logging because of Lambda node.js shim
		fmt.Fprintf(os.Stderr, "event: %v", string(event))

		if err := json.Unmarshal(event, &m); err != nil {
			return nil, err
		}

		return m, nil
	})
}
