
import {avatar} from './icons/user.png'

export default function Header(name) {

    return(
        <Header>
            <img src={avatar} />
            <p>{name}</p>
        </Header>
    )
} 