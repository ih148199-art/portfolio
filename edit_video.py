# ==========================================
# [중요] 오류 해결을 위한 긴급 패치 코드
# Pillow 10.x 버전에서 삭제된 ANTIALIAS를 복구합니다.
import PIL.Image
if not hasattr(PIL.Image, 'ANTIALIAS'):
    PIL.Image.ANTIALIAS = PIL.Image.LANCZOS
# ==========================================

from moviepy.editor import VideoFileClip, concatenate_videoclips, vfx

# 1. 파일명 (새로 올린 파일)
filename = "화면 녹화 중 2025-12-17 062917.mp4"
video = VideoFileClip(filename)

# 2. 컷 편집 (총 길이 약 13초)

# [Part 1] 게임 플레이 (0초 ~ 4초)
clip1 = video.subclip("00:00:00", "00:00:04")

# [Part 2] 점수 입력 및 저장 (40초 ~ 47초) -> 1.2배속
clip2 = video.subclip("00:00:40", "00:00:47").fx(vfx.speedx, 1.2)

# [Part 3] 랭킹 및 통계 그래프 확인 (54초 ~ 58초)
clip3 = video.subclip("00:00:54", "00:00:58")

# 3. 이어붙이기
final_clip = concatenate_videoclips([clip1, clip2, clip3], method="compose")

# 4. 저장하기
# (resize 과정에서 오류가 났었으므로, 패치 적용 후 다시 시도)
final_clip_resized = final_clip.resize(height=480)

print(f"예상 영상 길이: {final_clip_resized.duration}초")

# GIF와 MP4 저장
final_clip_resized.write_gif("portfolio_highlight.gif", fps=15)
final_clip_resized.write_videofile("portfolio_highlight.mp4", fps=24, codec='libx264')