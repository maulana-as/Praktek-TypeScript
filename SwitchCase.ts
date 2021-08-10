function getAlertSubscribers(level: number) {
    let emails = new Array<string>();
    switch (level != null) {
        case level < 5:
            emails.push('addd@gmail.com')
            break
        case level > 5 && level <= 10:
            emails.push("development@gmail.com")
            emails.push("sysadmin@domain.com")
            break;
        case level > 11:
            emails.push("development@gmail.com")
            emails.push("sysadmin@gmail.com")
            emails.push("management@domain.com")
            break;
        default:
            throw new Error("Invalid arguments!")
    }
    return emails
}

console.log(getAlertSubscribers(12)); // ["cst@domain.com"]
// console.log(getAlertSubscribers(level.warning)); // ["development@domain.com", "sysadmin@domain.com"]