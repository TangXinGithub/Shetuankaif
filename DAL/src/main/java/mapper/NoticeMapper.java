package mapper;

import entity.Notice;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeMapper {
   List<String> getAllNoticeTitles();
   List<Notice> getAllNotices();
   Notice getNoticeByNoticeTitle(String Title);
   int addANotice(Notice notice);
   int deleteANoticeByTitle(Integer ntID);
   int updateANoticeByTitle(Notice notice);
}
