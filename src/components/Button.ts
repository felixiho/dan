const defaultProps = {
    size: 'md',
}

export const Button = {
    defaultProps,

    baseStyle: {
        borderRadius: 'base',
        width: '100%',
        transition: "background-color 0.3s ease-in-out",
        fontWeight: 'bolder'
    },

    sizes: {
        lg: {
            fontSize: '20px',
            lineHeight: '28px',
            px: '36px',
            py: '30px'
        },
        md: {
            fontSize: '16px',
            lineHeight: '24px',
            px: '30px',
            py: '24px'
        },
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3
        },
    },

    variants: {
        primary: {
            bg: 'primary.300',
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            color: 'white',
            borderRadius: '8px',
            _hover: {
                color: 'primary.300',
                bg: 'white',
                border: '1px solid #8B6DCC',
                _disabled: {
                    bg: 'none'
                }
            },
            _disabled: { 
                color: 'primary.300',
                border: '1px solid #8B6DCC',
                bg: 'white',
                cursor: 'not-allowed',
            },
        },
        secondary: {
            bg: 'white',
            border: '1px solid #8B6DCC',
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            color: 'primary.300',
            borderRadius: '8px',
            _hover: {
                bg: 'primary.300',
                color: 'white',
            },
            _disabled: {
                border: 'disabled',
                bg: 'disabled',
                cursor: 'disabled',
            },
        },
  
    },
}
