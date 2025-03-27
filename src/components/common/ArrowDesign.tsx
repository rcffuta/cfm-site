
export function ArrowDesign(props:{k:number, simple?:boolean}) {

    let kind;
    let prefix = props.simple ? "simple":"arrow";

    switch (props.k) {
        case 1:
            kind = prefix+"One";
            break;
        case 2:
            kind = prefix+"Two";
            break;
        case 3:
            kind = prefix+"Three";
            break;
        case 4:
            kind = prefix+"Four";
            break;
        case 5:
            kind = prefix+"Five";
            break;
        case 6:
            kind = prefix+"Six";
            break;
        case 7:
            kind = prefix+"Seven";
            break;
        case 8:
            kind = prefix+"Eight";
            break;
        case 9:
            kind = prefix+"Nine";
            break;
        case 10:
            kind = prefix+"Ten";
            break;
        default:
            break;
    }


    if (!kind) return null;
    
    return <div className={"arrow-design " + kind}></div>
}