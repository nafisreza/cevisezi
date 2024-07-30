
export const Button = ({ children, variant, classes }) => {
    let sizeClasses;
  
    switch(variant) {
      case 'small':
        sizeClasses = 'text-sm px-3 py-1';
        break;
      case 'medium':
        sizeClasses = 'text-base px-5 py-2';
        break;
      case 'large':
        sizeClasses = 'text-lg px-7 py-3';
        break;
      case 'search':
        sizeClasses = 'ml-[-10px] px-5 py-2'
        break
        default:
        sizeClasses = 'text-base px-5 py-2'; 
    }
  
    return (
      <button className={`${classes} bg-purple-900 text-white rounded hover:bg-purple-800 transition ease-in-out duration-500 ${sizeClasses} `}>
        {children}
      </button>
    )
  }