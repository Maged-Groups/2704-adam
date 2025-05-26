import { useEffect, useState, memo } from "react"

function PasswordValidator({ password, passwordConfirmation }) {

    console.log('PasswordValidator rendered')
    const [hasUppercase, setHasUppercase] = useState(false)
    const [hasLowercase, setHasLowercase] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false)
    const [hasAcceptedLength, setHasAcceptedLength] = useState(false)
    const [matches, setMatches] = useState(false)

    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const numberRegex = /[\d]/
    const specialCharacterRegex = /[\W]/

    useEffect(() => {
        if (password) {
            setHasUppercase(uppercaseRegex.test(password))
            setHasLowercase(password.match(lowercaseRegex))
            setHasNumber(password.match(numberRegex))
            setHasSpecialCharacter(password.match(specialCharacterRegex))
            setHasAcceptedLength(password.length >= 8 && password.length <= 20)
            setMatches(password === passwordConfirmation)
        }
    }, [password, passwordConfirmation])


    return (
        <div>
            <p className="text-xs">
                {hasUppercase ? "✔️" : "❌"} Uppercase
            </p>
            <p className="text-xs">
                {hasLowercase ? "✔️" : "❌"} Lowercase
            </p>
            <p className="text-xs">
                {hasNumber ? "✔️" : "❌"} Number
            </p>
            <p className="text-xs">
                {hasSpecialCharacter ? "✔️" : "❌"} Special Character
            </p>
            <p className="text-xs">
                {hasAcceptedLength ? "✔️" : "❌"} Minimum Length
            </p>
            <p className="text-xs">
                {matches ? "✔️" : "❌"} Matches
            </p>
        </div>
    )
}


export default memo(PasswordValidator)

