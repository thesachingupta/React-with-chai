/*function customRender(reactElement, container){ // ek function bnaya jisme reactElement ko um container mai dale ge

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href) // sbse pehle hum href ko set arna chayte hai or iski value hogi uska path likha hai komma ke baaad
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    }
*/

 const domElement = document.createElement(reactElement.type)
 domElement.innerHTML = reactElement.children
 for (const prop in reactElement.props){
    if (prop === 'children') continue;
    domElement.setAttribute(prop , reactElement.props[prop])
 } 
 mainContainer.appenedChild(domElement)
 
const reactElement = { 
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root') // 

customRender(reactElement, mainContainer) // render reactelement ko maincontainer mai inject kara raha hai