import TextInput from 'components/input/TextInput'
import { BsSearch } from 'react-icons/bs'

const CompareScreen = () => {
  return (
    <div>
      <div className=" bg-[#D9D9D9]">
        <p className="py-[80px] text-center text-3xl font-medium">So sánh</p>
      </div>
      <div className="mx-[400px] mt-10">
        <p className="text-center text-xl font-medium">So sánh chim</p>
        <div className="flex justify-center space-x-[100px] pt-12">
          <div className="relative">
            <TextInput className="bg-white px-6 py-2" />
            <BsSearch className="absolute left-1 top-3" />
            <img src="src/assets/image/test.jpg" alt="" className="pt-10" />
          </div>
          <div className="relative">
            <TextInput className="bg-white px-6 py-2" />
            <BsSearch className="absolute left-1 top-3" />
            <img src="src/assets/image/test.jpg" alt="" className="pt-10" />
          </div>
        </div>
        <div className="space-y-2 pt-8">
          <div>
            <span className="text-lg font-medium">Ưu điểm :</span> Claritas est
            etiam processus dynamicus, qui sequitur mutationem consuetudi- um
            lectorum.
          </div>
          <div>
            <span className="text-lg font-medium">Nhược điểm :</span> Claritas
            est etiam processus dynamicus, qui sequitur mutationem consuetudi-
            um lectorum.
          </div>
          <div>
            <span className="text-lg font-medium">Thông tin chi tiết :</span>{' '}
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudi- um lectorum.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareScreen
