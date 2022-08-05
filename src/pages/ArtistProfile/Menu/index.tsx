import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { accountId } from "services/near";

type IMenuItem = {
    name: string,
    active: boolean,
}

function MenuItem({ 
    item,
}: PropsWithChildren<{ 
    item: IMenuItem 
}>) {
    const [menuItem, setMenuItem] = useState(item)
    const { hash } = useLocation()

    const onHashChange = () => {
        const hashParams = hash === '' ? 'nfts' : hash.split("#")[1]
        console.log(hashParams)
        if(menuItem.name.toLowerCase() === hashParams) {
            return setMenuItem(s => { 
                return { 
                    ...s, 
                    active: true 
                }
            })
        }
        setMenuItem(s => { 
            return { 
                ...s, 
                active: false
            }
        })
    }

    useEffect(() => {
        onHashChange()
    }, [hash])

    return (
        <li className="w-full hover dark:hover:bg-dark-gray-90 text-center cursor-pointer">
            <Link 
                to={`/@${accountId}#${ menuItem.name === 'NFTs' ? '' : menuItem.name.toLowerCase() }`} 
                className="flex justify-center">
                <p className="w-max py-4 relative">
                    <div>{ menuItem.name }</div>
                    { menuItem.active && 
                        <div className="absolute w-full bottom-0 left-0 right-0 border-2 border-primary-100 rounded-lg"></div>
                    }
                </p>
            </Link>
        </li>
    )
}

function Menu() {
    const [items, setItems] = useState<IMenuItem[]>([
        {
            name: 'NFTs',
            active: true
        }, 
        { 
            name: 'Collections',
            active: false
        }, 
        { 
            name: 'tbd',
            active: false
        },
        { 
            name: 'tbd',
            active: false
        }
    ])

    return (
        <div>
            <ul className="flex justify-center items-center border-b border-dark-gray-70">
                { items.map(item => 
                    <MenuItem item={item}/>
                )}
            </ul>
        </div>
    );
}

export default Menu;