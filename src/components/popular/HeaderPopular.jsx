import moreIcon from '../../icons/more.svg';

const HeaderPopular = () => {
    return(
        <div className="popular-header">
            <h2 className="title">Популярные</h2>
            <button className="more">
                <img width={20} height={5} src={moreIcon} alt="more" />
            </button>
        </div>
    )
}

export default HeaderPopular;