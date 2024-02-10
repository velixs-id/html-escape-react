import { Helmet } from "react-helmet"
import { unescape } from "html-escaper"

import Textarea from "../components/Textarea"
import { useState } from "react"

export default function Unescpae(){
    const [ html, setHTML ] = useState("")
    function handlerUnescape(e){
        setHTML(unescape(e.value))
    }

    function clearOutput(){
        setHTML("")
    }

    return (
        <>
            <Helmet>
                <title>HTML Unescaper</title>
                <meta name="description" content="A simple HTML Unescaper" />
            </Helmet>
            
            <Textarea unescapeable={handlerUnescape} clearable={clearOutput} placeholder="Enter string here..."/>
            
            <Textarea copyable placeholder="Output" value={html} />
        </>
    )
}