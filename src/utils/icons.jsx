const Icon = ({ iconName, classStyle }) => {
    const IconList = {

        crossIcon: (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.14903 15.0135L4.09607 13.9605L8.3079 9.74867L4.09607 5.53684L5.14903 4.48389L9.36086 8.69572L13.5727 4.48389L14.6256 5.53684L10.4138 9.74867L14.6256 13.9605L13.5727 15.0135L9.36086 10.8016L5.14903 15.0135Z" fill="black" />
            </svg>

        ),

        clickIcon: (
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7627 1.39761L4.16919 8.99109L0.688843 5.51074L1.58108 4.61851L4.16919 7.20029L10.8704 0.505371L11.7627 1.39761Z" fill="black" />
            </svg>


        ),
 
    };

    return (
        <span className={`flex ${classStyle}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icon;