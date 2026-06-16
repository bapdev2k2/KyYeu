'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GuestFormProps {
  onSubmit: (data: { name: string; class: string; message: string }) => void;
  isLoading: boolean;
}

export function GuestForm({ onSubmit, isLoading }: GuestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    message: '',
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name.trim() || !formData.class.trim()) {
    return;
  }

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbzi4104dBxpBkb-1hrQ0955iSp917YzzL5qDjLCZKde2rrmnRXctQ2AxzMrlYrjmefUVg/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      }
    );

    alert('🎉 Gửi lời chúc thành công!');

    setFormData({
      name: '',
      class: '',
      message: '',
    });

    onSubmit(formData);
  } catch (error) {
    console.error(error);
    alert('❌ Không thể gửi dữ liệu');
  }
};

  return (
    <motion.div
      className="fixed inset-0 z-20 flex items-center justify-center px-4 bg-[url('/background-texture.png')] bg-cover bg-center bg-opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full max-w-md glassmorphism p-8"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Form Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Để lại một chút dấu ấn nhé ❤️
          </h3>
          <p className="text-gray-600">Mình muốn biết thêm về bạn</p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Họ và tên *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nhập họ và tên của bạn"
              className="w-full px-4 py-3 text-gray-900 rounded-lg border-2 border-purple-200 focus:border-purple-400 focus:outline-none bg-white bg-opacity-60 transition-colors"
              required
            />
          </motion.div>

          {/* Class Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Lớp *
            </label>
            <input
              type="text"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              placeholder="VD: 12A1, 12A2, ..."
              className="w-full px-4 py-3 rounded-lg text-gray-900 border-2 border-purple-200 focus:border-purple-400 focus:outline-none bg-white bg-opacity-60 transition-colors"
              required
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Lời chúc dành cho tôi
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Chúc cậu luôn thành công trên chặng đường phía trước..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg text-gray-900 border-2 border-purple-200 focus:border-purple-400 focus:outline-none bg-white bg-opacity-60 transition-colors resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Đang gửi lời chúc...</span>
              </div>
            ) : (
              '📬 Gửi lời chúc'
            )}
          </motion.button>
        </form>

        {/* Decorative element */}
        <motion.div
          className="mt-6 text-center text-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✈️
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
