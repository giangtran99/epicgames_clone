export const getElipsisString = (description: string, maxLength: number) => {
    //trim the string to the maximum length
    if (description.length > 10) {
        let trimmedString = description.substr(0, maxLength);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
        return `${trimmedString} ...`
    }
    return description

}


export const formatMoney = (money: number) => {
    const formater = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formater.format(money)
}


