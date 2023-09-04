import { IButtonProps, IInputProps } from "native-base"
import { ReactNode } from "react"

export type IBtnProps = IButtonProps & {
 title: string
}

export type IInpProps = IInputProps & {
 icon: string
}

export type FormDataProps = {
 name: string
 email: string
 password: string
 password_confirm: string
}

export type SignInDataProps = {
 email: string
 password: string
}

export type CardProps = {
 icon: ReactNode
 text: string
}