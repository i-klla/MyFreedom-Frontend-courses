import logo from '@assert/images/spotify-logo.png'
import classes from './Header.module.scss'

function Header() {
    const links = [
        {
            label: 'Google',
            href: 'https://google.com/'
        },
        {
            label: 'Discord',
            href: 'https://discord.com/'
        },
        {
            label: 'Steam',
            href: 'https://store.steampoweres.com/'
        },
        {
            label: 'Epic Game',
            href: 'https://store.epicgames.com/'
        },
        {
            label: 'Youtube',
            href: 'https://www.youtube.com/'
        },
    ]

    const aTags = links.map((link, index) => {
        return <a key={index} className={classes.navlink} href={link.href} target='-blank'>{link.label}</a>
    })

    return (
        <header className={classes.header}>
            <img className={classes['header-logo']} src={logo} alt="" />
            <nav className={classes.nav}>
                {aTags}
            </nav>
            <button className={classes['signin-btn']}>Sign-in</button>
        </header>
    )
}

export default Header
