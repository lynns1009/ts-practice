export const BREAK_POINT = '(max-width:768px)';

export interface IMenuItem {
    name :string;
    path :string;
    children?: {name :string; children :IMenuItem[];}[]
}

export const SideMenuItems :IMenuItem[] =[
    {
        name: "Home",
        path: "home"
    },{
        name: "Profile",
        path: "profile"
    }
]
