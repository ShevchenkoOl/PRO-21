import { HomePage } from './pages/HomePage'
import { About } from './pages/About'
import { Contact } from './pages/Concact'
import { ErrorPage } from './pages/ErrorPage';

export function navigateTo (url){
    history.pushState(null, null, url);
    
    router();
}

export async function router(){
    const routes = [
        {path: "/", view: HomePage},
        {path: "/about", view: About},
        {path: "/contact", view: Contact}
    ]

const potentialMatches = routes.map(router => {
    return{
        router: router,
        isMatch: location.pathname === router.path
    }
});


let match = potentialMatches.find(el => el.isMatch);

// if(!match){
//         match = {
//             router: {view: () => `<h1>404, Sorry, the page did not find</h1>`},
//             isMatch: true
//         };
// };


if(!match){
        match = {
            router: {view: () => ErrorPage()},
            isMatch: true
        };
};

const routerView = document.querySelector(".main");
// console.log(routerView);
routerView.innerHTML = match.router.view();

}