package core

type ShameAsAServiceError struct {
	IsShameAsAServiceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewShameAsAServiceError(code string, msg string, ctx *Context) *ShameAsAServiceError {
	return &ShameAsAServiceError{
		IsShameAsAServiceError: true,
		Sdk:              "ShameAsAService",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ShameAsAServiceError) Error() string {
	return e.Msg
}
