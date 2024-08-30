import React from 'react'

const RoomPage = ({setIsAuth, setRoom}) => {

    //* ÇIKIŞ
 const logout = () => {
 };

 //* form gönderilince
 const handleSubmit = (e) => {
    e.preventDefault();

    //* inputtaki girdiyi al ve küçük harfe çevir ( büyük küçük harf duyarlılığını ortadan kaldır)
    const room = e.target[0].value.toLocaleLowerCase();

    //* STATE'İ güncelle
    setRoom(room);
 };

  return (
    <form onSubmit={handleSubmit}
    className='room-page'>
        <h1>Chat Room</h1>
        <p>Hangi Odaya Gİreceksiniz</p>

        <input type="text" placeholder='ör:haftaiçi' required />

        {/* formu göndermemesi için submit olacak type'ı */}
        <button type='submit'>Odaya Gir</button>
            {/* formu göndermesi için button yapıyoruz type'ını */}
        <button
        onClick={logout}
        type='button'>Exit</button>
    </form>
  )
}

export default RoomPage