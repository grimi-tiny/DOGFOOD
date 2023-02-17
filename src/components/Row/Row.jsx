import React, {useContext, useState, useEffect} from "react";
import {Image, Button, ButtonGroup} from "react-bootstrap";

import Ctx from "../../Ctx";

export default ({name, pictures, cnt, price, id}) => {
    const {setBasket} = useContext(Ctx);
    const [n, setN] = useState(cnt);
    const [flag, setFlag] = useState(false);
    const increment = () => {
        setFlag(true);
        setN(n + 1);
    }
    const decrement = () => {
        setFlag(true);
        setN(n - 1);
    }
    useEffect(() => {
        if (flag) {
            setBasket(prev => {
                if (n) {
                    return prev.map(el => {
                        if (el.id === id) {
                            el.cnt = n;
                        }
                        return el;
                    })
                } else {
                    return prev.filter(el => el.id !== id);
                }
            })
        }
    }, [n]);
    return <tr className="align-middle">
        <td><Image src={pictures} alt={name} height="150"/></td>
        <td className="fs-4">{name}</td>
        <td>
            <ButtonGroup>
                <Button variant="warning" onClick={decrement}>-</Button>
                <Button variant="light" disabled>{n}</Button>
                <Button variant="warning" onClick={increment}>+</Button>
            </ButtonGroup>
        </td>
        <td className="fs-4">{price * n}₽</td>
    </tr>
}