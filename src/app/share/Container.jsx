

export const Container = ({children, direction, align, justify}) => {

    return (<>
        <div className={`flex h-screen max-w-screen ${direction} ${align} ${justify} overflow-hidden`}>
            {children}
        </div>
    </>)
}