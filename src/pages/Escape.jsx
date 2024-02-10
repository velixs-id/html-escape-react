import { Helmet } from "react-helmet"
import { escape } from "html-escaper"

import Textarea from "../components/Textarea"
import { useState } from "react"

export default function Escpae(){
    const [ html, setHTML ] = useState("")
    function handlerEscape(e){
        setHTML(escape(e.value))
    }

    function clearOutput(){
        setHTML("")
    }

    return (
        <>
            <Helmet>
                <title>HTML Escaper</title>
                <meta name="description" content="A simple HTML Escaper" />
            </Helmet>
            
            <Textarea escapable={handlerEscape} clearable={clearOutput} />
            
            <Textarea copyable placeholder="Output" value={html} />
        </>
    )
}