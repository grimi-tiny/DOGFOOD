import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PencilSquare, XSquare, Check2Square} from "react-bootstrap-icons";
import {Row, Col, Form, Image} from "react-bootstrap";
import Ctx from "../Ctx";

export default () =>{
    const {user,setUser,api,PATH}=useContext(Ctx);
    const navigate = useNavigate();
    const [nameFlag, setNameFlag] = useState(false);
    const [name,setName] = useState(user.name);
    const [textFlag, setTextFlag]= useState(false);
    const [text,setText] = useState(user.about);
    const [imgFlag, setImgFlag] = useState(false);
    const [img,setImg] = useState(user.avatar);

    const updateUser = () =>{
        api.updateUser({name: name, about:text})
        .then(res => res.json())
        .then(data =>{
            setUser(data);
            localStorage.setItem("user8", JSON.stringify(data));
            setNameFlag(false);
            setTextFlag(false);
        })
    };

    const updateImg = () =>{
        api.updateUser({avatar: img }, true)
        .then(res => res.json())
        .then(data =>{
            setUser(data);
            localStorage.setItem("user8", JSON.stringify(data));
            setImgFlag(false);
        })
    }

    const logOut = (e) =>{
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("user8");
        navigate(PATH);
    };

    return <Row>
    <Col xs={12} md={8}>
        <h1>Личный кабинет</h1>
        <p className="profile-row">
            {!nameFlag 
                ? <>
                    <span className="display-4">{name}</span>
                    <PencilSquare onClick={() => setNameFlag(true)}/>
                </>
                : <>
                    <Form.Control type="text" value={name} required onChange={e => setName(e.target.value)}/>
                    <Check2Square onClick={updateUser} />
                    <XSquare onClick={() => {
                        setName(user.name);
                        setNameFlag(false);
                    }}/>
                </>
            }
        </p>
        <p className="profile-row">
            {!textFlag 
                ? <>
                    <span className="display-6">{text}</span>
                    <PencilSquare onClick={() => setTextFlag(true)}/>
                </>
                : <>
                    <Form.Control type="text" value={text} required onChange={e => setText(e.target.value)}/>
                    <Check2Square onClick={updateUser}/>
                    <XSquare onClick={() => {
                        setText(user.about);
                        setTextFlag(false);
                    }}/>
                </>
            }
        </p>
        <p className="profile-row"><a href={`mailto:${user.email}`}>{user.email}</a></p>
            {user.group && <p className="profile-row">{user.group}</p>}
            <p><a href="" onClick={logOut} style={{color: "rgba(153, 112, 112)"}}>Выйти из аккаунта</a></p>
        </Col>
        <Col xs={12} md={4}>
            <p className="profile-row">
            {!imgFlag 
                ? <>
                    <PencilSquare onClick={() => setImgFlag(true)}/>
                </>
                : <>
                    <Form.Control type="text" value={img} required onChange={e => setImg(e.target.value)}/>
                    <Check2Square onClick={updateImg} />
                    <XSquare onClick={() => {
                        setImg(user.avatar);
                        setImgFlag(false);
                    }}/>
                </>
            }
            </p>
            <Image src={img} alt={name} className="w-100"/>
        </Col>       
    </Row>
}