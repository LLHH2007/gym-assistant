export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  note: string;
  image: string | string[];
}

export interface WorkoutDay {
  id: string;
  name: string;
  target: string;
  exercises: Exercise[];
}

export interface GenderWorkout {
  title: string;
  days: WorkoutDay[];
}

export type Gender = "nam" | "nu";

export const workoutData: Record<Gender, GenderWorkout> = {
  nam: {
    title: "Lịch Tập Gym Cho Nam",
    days: [
      {
        id: "day1",
        name: "Buổi 1: Push Day (Ngực - Vai - Tay sau)",
        target: "Các nhóm cơ đẩy.",
        exercises: [
          {
            name: "Bench Press (Đẩy ngực ngang)",
            sets: "4",
            reps: "8 - 10",
            rest: "90s",
            note: "Bài tập compound phát triển cơ ngực chính",
            image: "/exercises/bench_press.png",
          },
          {
            name: "Incline Dumbbell Press (Đẩy ngực trên với tạ đơn)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Tập trung ngực trên",
            image: "/exercises/incline_dumbbell_press.png",
          },
          {
            name: "Chest Press Machine (Đẩy ngực với máy)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Cô lập cơ ngực",
            image: "/exercises/chest_press_machine.png",
          },
          {
            name: "Barbell Shoulder Press (Đẩy vai với tạ đòn)",
            sets: "3",
            reps: "8 - 12",
            rest: "90s",
            note: "Tăng cường sức mạnh vai",
            image: "/exercises/barbell_shoulder_press.jpg",
          },
          {
            name: "Dumbbell Lateral Raises (Nâng vai ngang)",
            sets: "3",
            reps: "8 - 12",
            rest: "45s",
            note: "Phát triển độ rộng vai",
            image: "/exercises/dumbbell_lateral_raises.png",
          },
          {
            name: "Dips (Hít xà kép)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Tác động ngực dưới và tay sau",
            image: ["/exercises/dips_bench.png", "/exercises/dips_bars.png"],
          },
          {
            name: "Skullcrushers / Push Downs",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Bài tập riêng cho cơ tay sau",
            image: "/exercises/skullcrushers.png",
          },
          {
            name: "Tricep Overhead Extension (Kéo cáp tay sau qua đầu)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Giãn tối đa cơ tay sau",
            image: ["/exercises/tricep_overhead_dumbbell.png", "/exercises/tricep_overhead_cable.png"],
          },
          {
            name: "Push Up (Hít đất)",
            sets: "3",
            reps: "15 - 20",
            rest: "60s",
            note: "Bơm máu toàn bộ thân trên cuối buổi",
            image: "/exercises/push_up.png",
          },
        ],
      },
      {
        id: "day2",
        name: "Buổi 2: Pull Day (Lưng - Xô - Bắp tay - Cẳng tay)",
        target: "Các nhóm cơ kéo.",
        exercises: [
          {
            name: "Deadlift (Lưng dưới, giữa, cẳng tay)",
            sets: "4",
            reps: "8 - 10",
            rest: "120s",
            note: "Bài tập compound toàn thân nặng",
            image: "/exercises/deadlift.png",
          },
          {
            name: "Pull-ups / Chin-ups (Hít xà đơn)",
            sets: "3",
            reps: "8 - 12",
            rest: "90s",
            note: "Phát triển độ rộng lưng xô",
            image: "/exercises/pullups.png",
          },
          {
            name: "Lat Pulldown (Kéo xô với máy)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Tập trung cô lập cơ xô",
            image: "/exercises/lat_pulldown.png",
          },
          {
            name: "Barbell Row (Gập người kéo tạ đòn)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Độ dày cho lưng giữa",
            image: "/exercises/barbell_row.png",
          },
          {
            name: "Dumbbell Row (Kéo tạ đơn từng bên)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Sửa lệch cơ lưng tốt",
            image: "/exercises/dumbbell_row.png",
          },
          {
            name: "Face Pulls (Kéo cáp ngang mặt)",
            sets: "3",
            reps: "8 - 12",
            rest: "45s",
            note: "Tập vai sau và lưng trên",
            image: "/exercises/face_pulls.png",
          },
          {
            name: "Barbell Curl (Cuốn tạ đòn bắp tay)",
            sets: "3",
            reps: "10 - 12",
            rest: "60s",
            note: "Phát triển kích thước bắp tay trước",
            image: "/exercises/barbell_curl.png",
          },
          {
            name: "Seated Hammer Curls (Cuốn tạ kiểu búa)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Tập bề dày bắp tay và cẳng tay",
            image: "/exercises/hammer_curls.png",
          },
          {
            name: "Wrist Curl (Cuốn cổ tay - cẳng tay)",
            sets: "3",
            reps: "12 - 15",
            rest: "45s",
            note: "Tăng sức mạnh bám nắm cẳng tay",
            image: "/exercises/wrist_curl.png",
          },
          {
            name: "Back Extension (Gập lưng trên khung)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Bổ trợ sức mạnh cơ lưng dưới",
            image: "/exercises/back_extension.png",
          },
        ],
      },
      {
        id: "day3",
        name: "Buổi 3: Leg & Abs Day (Chân - Mông - Bắp chân - Bụng)",
        target: "Thân dưới và cơ trọng tâm.",
        exercises: [
          {
            name: "Squat (Tạ đòn hoặc tạ đơn)",
            sets: "4",
            reps: "8 - 10",
            rest: "120s",
            note: "Phát triển đùi trước và mông (Quads & Glutes)",
            image: "/exercises/squat.png",
          },
          {
            name: "Seated Leg Extension (Đá đùi trước với máy)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Cô lập cơ đùi trước",
            image: "/exercises/leg_extension.png",
          },
          {
            name: "Lying Leg Curls (Cuộn đùi sau với máy)",
            sets: "3",
            reps: "8 - 12",
            rest: "60s",
            note: "Cô lập đùi sau",
            image: "/exercises/leg_curls.png",
          },
          {
            name: "Standing Calf Raises (Nhón chân bắp chân)",
            sets: "4",
            reps: "15 - 20",
            rest: "45s",
            note: "Phát triển bắp chân",
            image: "/exercises/calf_raises.png",
          },
          {
            name: "Crunch / Abs Machine (Gập bụng)",
            sets: "3",
            reps: "15 - 20",
            rest: "45s",
            note: "Săn chắc cơ bụng",
            image: "/exercises/crunch.png",
          },
        ],
      },
    ],
  },
  nu: {
    title: "Lịch Tập Gym Cho Nữ",
    days: [
      {
        id: "day1",
        name: "Buổi 1: Chân - Mông trọng tâm (Lower Body & Glutes)",
        target: "Phát triển vòng 3 quả đào và đùi sau săn chắc.",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: "4",
            reps: "6 - 8",
            rest: "60 - 90 giây",
            note: "Có thể thay bằng Leg Press nếu đau gối",
            image: "/exercises/squat.png",
          },
          {
            name: "Romanian Deadlift",
            sets: "4",
            reps: "6 - 8",
            rest: "60 giây",
            note: "Tập trung vào cơ đùi sau và mông",
            image: "/exercises/romanian_deadlift.png",
          },
          {
            name: "Lunges",
            sets: "3",
            reps: "12 (mỗi chân)",
            rest: "60 giây",
            note: "Tập đều hai bên chân",
            image: "/exercises/lunges.png",
          },
          {
            name: "Hip Abduction Machine",
            sets: "2",
            reps: "15",
            rest: "45 giây",
            note: "Máy ép đùi ngoài, bổ trợ độ rộng mông",
            image: "/exercises/hip_abduction.png",
          },
          {
            name: "Glute Bridge",
            sets: "3",
            reps: "15",
            rest: "60 giây",
            note: "Gồng chặt cơ mông ở điểm cao nhất",
            image: "/exercises/glute_bridge.png",
          },
        ],
      },
      {
        id: "day2",
        name: "Buổi 2: Thân trên thon gọn (Upper Body & Hourglass Shape)",
        target:
          "Tập lưng và vai để tạo hiệu ứng thị giác thắt eo nhỏ lại, săn chắc vòng 1.",
        exercises: [
          {
            name: "Lat Pulldown (hoặc Assisted Chin-up)",
            sets: "3",
            reps: "8 - 12",
            rest: "60 giây",
            note: "Kéo xô giúp tấm lưng thon thả",
            image: "/exercises/lat_pulldown.png",
          },
          {
            name: "Cable Row (hoặc Barbell Row)",
            sets: "3",
            reps: "10 - 12",
            rest: "60 giây",
            note: "Giúp giảm mỡ lưng thừa hiệu quả",
            image: "/exercises/cable_row.png",
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: "3",
            reps: "10",
            rest: "60 giây",
            note: "Đẩy vai tạ đơn tạo phom vai ngang",
            image: "/exercises/shoulder_press.png",
          },
          {
            name: "Dumbbell Chest Press",
            sets: "3",
            reps: "12",
            rest: "60 giây",
            note: "Thay cho Push-up nếu chưa đủ lực tay",
            image: "/exercises/chest_press_dumbbell.png",
          },
          {
            name: "Lateral Raise",
            sets: "3",
            reps: "12 - 15",
            rest: "45 giây",
            note: "Nuôi bờ vai thon gọn",
            image: "/exercises/lateral_raises.png",
          },
        ],
      },
      {
        id: "day3",
        name: "Buổi 3: Toàn thân phối hợp & Bụng (Full Body & Core)",
        target: "Đốt calo toàn thân, cô lập mông và kiến tạo cơ bụng.",
        exercises: [
          {
            name: "Hip Thrust",
            sets: "4",
            reps: "6 - 8",
            rest: "90 giây",
            note: "Bài tập xây dựng vòng 3 tốt nhất",
            image: "/exercises/hip_thrust.png",
          },
          {
            name: "Goblet Squat",
            sets: "3",
            reps: "10 - 15",
            rest: "60 giây",
            note: "Ôm tạ trước ngực, xuống sâu",
            image: "/exercises/goblet_squat.png",
          },
          {
            name: "Kettlebell Swing",
            sets: "2",
            reps: "25",
            rest: "60 giây",
            note: "Bài tập năng động giúp đốt mỡ rất tốt",
            image: "/exercises/kettlebell_swing.png",
          },
          {
            name: "Glute Kickbacks",
            sets: "2",
            reps: "30 (mỗi chân)",
            rest: "45 giây",
            note: "Đá mông ngược ra sau",
            image: "/exercises/glute_kickbacks.png",
          },
          {
            name: "Plank",
            sets: "3",
            reps: "30 - 45 giây",
            rest: "30 giây",
            note: "Siết chặt bụng, không để võng lưng",
            image: "/exercises/plank.png",
          },
          {
            name: "Russian Twist / Bicycle Crunches",
            sets: "3",
            reps: "15 (mỗi bên)",
            rest: "30 giây",
            note: "Tập trung vào phần cơ bụng chéo",
            image: "/exercises/russian_twist.png",
          },
        ],
      },
    ],
  },
};
