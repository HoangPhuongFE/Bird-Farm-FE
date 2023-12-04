interface PaginationProps {
  totalPage: number
  currentPage?: number
  onChangePage: (page: number) => void
}
const ProductPagination: React.FC<PaginationProps> = ({
  totalPage,
  currentPage,
  onChangePage
}) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <ul className=" flex items-center justify-center space-x-6 pt-10">
        {pageNumbers.map((page) => {
          return (
            <li
              className={`${
                page === currentPage ? 'bg-primary text-white' : ''
              } m-[5px] cursor-pointer border-[1px] border-primary px-[10px] py-[3px] text-primary hover:bg-primary hover:text-white`}
              key={page}
              onClick={() => onChangePage(page)}
            >
              {page}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductPagination
