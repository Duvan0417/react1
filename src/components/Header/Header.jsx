import '../Header/Header.css'

//tercer forma
export const Header = ({children,title,show}) => {
    return (
        <header className="header">
            <h1 className="tittle">
                {title}
            </h1>
            {children}
            {
                show ? <p>mundo</p>: <p>planet</p>
            }
        </header>
    )
}
export default Header;