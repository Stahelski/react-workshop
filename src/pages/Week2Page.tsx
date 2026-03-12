import { Badge } from "../components/week2/ui/Badge"
import { LinkButton } from "../components/week2/ui/LinkButton"
import { Paragraph } from "../components/week2/ui/Paragraph"
import { TextButton } from "../components/week2/ui/TextButton"

export default function Week2Page(){

    return(
        <>
        <main className="week2PageWrapper">
        <Badge label="Sale" level="Success"/>
        <LinkButton label="Link" href="https://react.dev/reference/react/Suspense"/>
        <Paragraph text="Some text here" tSize="14px"/>
        <TextButton text="Some text here"/>
        </main>
        </>
    )
}