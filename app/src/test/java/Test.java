import kunpeng.App;
import kunpeng.Configuration.testB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import service.NoticeService;
import service.UserService;
import  entity.Notice;
import java.util.Date;

//@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class)
@DirtiesContext
public class Test {
//    @Autowired  必须是一个springBean 类型的。!!!
//    只有app有springboot的依赖，所以所有与spring相关的应该在这里测试

    @Autowired
    UserService userService;
//    @Autowired
//    @Qualifier("tes") //因为我在自定义bean中 为testB 取了别名
    testB testB;
    @org.junit.jupiter.api.Test
    public  void test(){
      /*  userService.login();//测试*/
      /*  userService.login("sff","xxxx");*/
        System.out.println("autowiredxx");
    }
    @org.junit.jupiter.api.Test
    public void test1(){
        System.out.println("hello world");
    }

    @Autowired
    NoticeService noticeService;

    @org.junit.jupiter.api.Test
    public void testNoticeService(){
        Notice notice = new Notice();
        notice .setNt_Title("刘忠骚吗");
        notice.setNtID(1);
        notice.setNt_Author(123);
        notice.setNt_Content("刘忠好骚");
        notice.setNt_Attachment("www.baidu.com");
        notice.setNt_Publish_Time(new Date());
        //NoticeService service = new NoticeService();
        System.out.println(noticeService.addANotice(notice) == 1);
    }
}
