import Style from './difficulty.module.css'

function LeftSideComponent(props){

    const {btnClick} = props;

    return(

        <div className={Style.Left}>
            <button className="mt-4" onClick={()=>btnClick('LOW')}>Set to LOW</button><br/>
            <button className="mt-4" onClick={()=>btnClick('MEDIUM')}>Set to MEDIUM</button><br/>
            <button className="mt-4" onClick={()=>btnClick('HARD')}>Set to HARD</button><br/>
            <button className="mt-4" onClick={()=>btnClick('INSANE')}>Set to INSANE</button>
        </div>

    );

}
export default LeftSideComponent;