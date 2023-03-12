import { Logo } from "./Logo"
import { SearchBox } from "./SearchBox"
import { UserMenu } from "./UserMenu"

const user={
    isPremium:false,
    avatarURL:'',
}
export const AppBar=()=>{
    return(
        <header>
            <Logo text={user.isPremium? 'Premium':'YouTube' }/>
            <SearchBox/>
            <UserMenu avatar={user.avatarURL}/>
        </header>
    )
}