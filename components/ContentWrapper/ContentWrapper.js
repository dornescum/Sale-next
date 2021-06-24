import classes from "./contentWrapper.module.scss";
const ContentWrapper =(props)=>{
    return <div className={classes.wrapper}>{props.children}</div>
}
export default ContentWrapper;
