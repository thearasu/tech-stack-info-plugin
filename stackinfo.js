function techstacks(stacks){

const techStackBar = document.createElement("div")
techStackBar.id = "techstackbar"
document.body.appendChild(techStackBar)

var template = ``;
for(let stack of stacks){
    template = template + `<li :style="stackStyle">` + stack + "</li>"
}

template = `<ul :style="stackBarStyle"> Tech stacks used: `+ template +"</ul>"

const { createApp } = Vue
createApp({
    data(){
        return{
            stackBarStyle: {
                position : "fixed",
                backgroundColor: "#EFEFEF",
                left: "10px",
                bottom: "10px",
                padding: "2px 5px 2px 5px",
                margin: "0 0 0 0",
                listStyleType: "none",
                display: "flex",
                border: "1px solid #00222E",
                color: "#00222E"
            },
            stackStyle: {
                padding: "0px 4px 0px 4px",
                margin: "0px 2px 0px 2px",
                borderRadius: "5px",
                backgroundColor: "#ABE7FB"
            }
        }
    },
    template: template
  }).mount('#techstackbar')

}