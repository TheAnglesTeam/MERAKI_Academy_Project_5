import io from 'socket.io-client';

const socketInit = ({user_id, token,room})=>{
    return io(`https://meraki-academy-project-5-forked.vercel.app`, {
        extraHeaders:{
            user_id,
            token,
            room
        },
    })
}
export default socketInit