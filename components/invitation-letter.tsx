'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface InvitationLetterProps {
  onContinue: () => void;
}

export function InvitationLetter({ onContinue }: InvitationLetterProps) {
  return (
    <motion.div
      className="fixed inset-0 z-20 flex items-center justify-center px-4 bg-[url('/background-texture.png')] bg-cover bg-center bg-opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Letter Header */}
        <div className="text-center mb-8 pb-8 border-b-2 border-purple-200">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-widest text-purple-600 font-semibold mb-4">
              ✨ Thư Mời ✨
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Chụp Kỷ Yếu
            </h2>
          </motion.div>
        </div>
        {/* Banner Image */}
        <motion.div
          className="mb-8 rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          
          <Image
            src="/invitation-banner.jpg"
            alt="Kỷ yếu lớp 12"
            width={500}
            height={280}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        

        {/* Letter Content */}
        <motion.div
          className="space-y-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-center text-xl md:text-2xl text-gray-700 italic">
            Thanh xuân chỉ đến một lần...
          </p>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Mình rất mong có sự góp mặt của bạn trong buổi chụp kỷ yếu sắp tới.
            </p>

            <p>
              Đây sẽ là dịp để chúng ta cùng lưu giữ những khoảnh khắc cuối cùng của tuổi học trò, những ký ức vàng son mà sẽ luôn nằm trong lòng chúng ta.
            </p>
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div
          className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-xl p-6 mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">📅</span>
            <div>
              <p className="text-sm text-gray-600">Thời gian</p>
              <p className="text-lg font-semibold text-gray-800">28/06/2026 - 9:00 AM</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-2xl">📍</span>
            <div>
              <p className="text-sm text-gray-600">Địa điểm</p>
              <p className="text-lg font-semibold text-gray-800">Trường THPT Vĩnh Lộc</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-2xl">👔</span>
            <div>
              <p className="text-sm text-gray-600">Dresscode</p>
              <p className="text-lg font-semibold text-gray-800">Áo dài / Chỉnh trang lịch sự</p>
            </div>
          </div>
        </motion.div>

        {/* Signature Line */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 italic">Chúng mình hẹn bạn nhé! 🌻</p>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={onContinue}
            className="w-full py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow hover:scale-105 cursor-pointer"
          >
            Tiếp tục →
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
