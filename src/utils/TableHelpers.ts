export const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>,columnKey:string, onResize:(width: number) => void, setColumnMoving: React.Dispatch<React.SetStateAction<string | null>>) => {
    if(e && e.currentTarget && e.currentTarget.parentElement){
        setColumnMoving(columnKey)
    const startX = e.pageX;
    const startWidth = parseFloat(
      window.getComputedStyle(e.currentTarget.parentElement).width
    );

    const handleMouseMove = (event: MouseEvent) => {
      const newWidth = startWidth + (event.pageX - startX);
      onResize(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      setColumnMoving(null)
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);}
  };