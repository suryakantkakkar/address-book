export interface contactInput{
    name:string,
    mobile:string,
    email:string
}

export interface contact extends contactInput{
    id:string
}