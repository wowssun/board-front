import React from 'react'
import { Link } from 'react-router-dom'
import SectionMenu from '@/components/Header/SectionMenu'
import WriteButton from '@/components/Button/WriteButton'

const list: React.FC = () => {
  return (
    <>
			<SectionMenu title={'게시판'} />
			<div>
				<WriteButton />
				{/* 게시판 목록 */}
				{/* {posts && posts.length > 0 ? ( */}
					<div
						id="tableId"
						className="relative overflow-x-auto shadow-md  sm:rounded-lg mx-auto mb-10 lg:w-[1000px]"
					>
						{/* Header */}
						<div className="hidden sm:flex md:text-lg text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 text-center bg-[#d8dfed]">
							<div className="md:px-6 md:py-3 px-6 py-3 text-center flex-none w-24">
								{/* 게시판 번호 */}
							</div>
							<div className="md:px-6 md:py-3 px-6 py-3 text-left flex-1">
								제목
							</div>
							<div className="md:px-6 md:py-3 px-6 py-3 text-center flex-none sm:w-[160px]">
								작성자
							</div>
							<div className="md:px-6 md:py-3 px-6 py-3 text-center flex-none sm:w-[140px]">
								작성일
							</div>
							<div className="md:px-6 md:py-3 px-6 py-3 text-center flex-none hidden sm:block w-40">
								조회수
							</div>
						</div>

						{/* Body */}
						<div>
							{/* {posts.map((post) => ( */}
								<Link
									// to={`board/view/${post.id}?page=${p}`}
                  to=''
									// key={post.id}
									className="flex text-sm flex-wrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer"
								>
									{/* 게시글 번호 */}
									<div className="px-5 py-4 text-center flex-none w-24 hidden sm:block text-gray-300 items-stretch">
										{/* {post.id} 게시글 번호 */}
									</div>
									{/* 게시글 제목 */}
									<div className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white text-left truncate sm:truncate sm:max-w-[400px] min-w-[400px]  ">
										{/* {post.title} 게시글 제목 */}
									</div>
									{/* 게시글 작성자 */}
									<div className="flex flex-1 sm:justify-end justify-between ">
										<div className="px-6 py-2 sm:px-6 sm:py-4 text-center flex-none text-sm text-gray-400 sm:w-[160px] ">
											{/*{post.authorId}  게시글 작성자 */}
										</div>
										{/* 게시글 작성일 */}
										<div className="px-6 py-2 sm:px-6 sm:py-4 text-center flex-none text-sm text-gray-400 sm:w-[140px]">
											{/*{new Date(post.createdAt).toLocaleDateString()}{' '}
											{/* 게시글 작성일 */}
										</div>
									</div>
									{/* 게시글 조회수 */}
									<div className="px-6 py-2 sm:px-6 sm:py-4 text-center flex-none hidden sm:block text-sm text-gray-400 w-40">
										{/* {post.views} 게시글 조회수 */}
									</div>
								</Link>
							{/* ))} */}
						</div>
					</div>
				{/* ) : ( */}
					<p>게시물이 없습니다</p>  {/* posts가 없을 경우 표시할 메시지 */} 
				{/* )} */}
				{/* <Pagination page={p} count={count} /> */}
			</div>
		</>
  )
}

export default list