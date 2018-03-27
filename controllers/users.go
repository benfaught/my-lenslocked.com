package controllers

import (
	"fmt"
	"net/http"

	"lenslocked.com/views"
)

func NewUsers() *Users {
	return &Users{
		NewView: views.NewView("bootstrap", "views/users/new.gohtml"),
	}
}

type Users struct {
	NewView *views.View
}

//New is used to render the form where a user can create
//a new user account.
//
//GET /signup
func (u *Users) New(w http.ResponseWriter, r *http.Request) {
	fmt.Println("is this working?")
	u.NewView.Render(w, nil)
}

//This is used to process the signup form when a user tries to
//create a new user account.
//
//POST /signup
func (u *Users) Create(w http.ResponseWriter, r *http.Request) {
	if err := r.ParseForm(); err != nil {
		panic(err)
	}
	fmt.Fprintln(w, r.PostForm["email"])
	fmt.Fprintln(w, r.PostForm["password"])
}
