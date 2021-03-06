package kunpeng.bean;
/**
 * 错误码统一处理类，所有的错误码统一定义在这里
 * @author Administrator
 *
 */
public class CodeMsg {

	private int code;//错误码
	
	private String msg;//错误信息
	
	/**
	 * 构造函数私有化即单例模式
	 * @param code
	 * @param msg
	 */
	private CodeMsg(int code,String msg){
		this.code = code;
		this.msg = msg;
	}
	
	public int getCode() {
		return code;
	}



	public void setCode(int code) {
		this.code = code;
	}



	public String getMsg() {
		return msg;
	}



	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	//通用错误码定义
	//处理成功消息码
	public static CodeMsg SUCCESS = new CodeMsg(0, "success");
	//非法数据错误码
	public static CodeMsg DATA_ERROR = new CodeMsg(-1, "非法数据！");
	public static CodeMsg CPACHA_EMPTY = new CodeMsg(-2, "验证码不能为空！");
	public static CodeMsg VALIDATE_ENTITY_ERROR = new CodeMsg(-3, "");
	public static CodeMsg SESSION_EXPIRED = new CodeMsg(-4, "会话已失效，请刷新页面重试！");
	public static CodeMsg CPACHA_ERROR = new CodeMsg(-5, "验证码错误！");
	public static CodeMsg USER_SESSION_EXPIRED = new CodeMsg(-6, "还未登录或会话失效，请重新登录！");
	public static CodeMsg UPLOAD_PHOTO_SUFFIX_ERROR = new CodeMsg(-7, "图片格式不正确！");
	public static CodeMsg UPLOAD_PHOTO_ERROR = new CodeMsg(-8, "图片上传错误！");
	public static CodeMsg ORDER_SN_ERROR = new CodeMsg(-11, "订单编号错误！");
	public static CodeMsg PHONE_ERROR = new CodeMsg(-12, "手机号错误！");
	public static CodeMsg ORDER_AUTH_ERROR = new CodeMsg(-13, "\u8ba2\u5355\u9a8c\u8bc1\u5931\u8d25\uff0c\u8ba2\u5355\u7f16\u53f7\u6216\u624b\u673a\u53f7\u8f93\u5165\u6709\u8bef\u6216\u8005\u53ef\u80fd\u4f60\u8d2d\u4e70\u7684\u662f\u76d7\u7248\uff0c\u8bf7\u8054\u7cfb\u3010\u733f\u6765\u5165\u6b64\u3011\u5ba2\u670d\uff01");
	public static CodeMsg UNKNOWN_ERROR = new CodeMsg(Integer.MIN_VALUE,"未知错误，请联系管理员解决问题！");
	public static CodeMsg USER_ERROR = new CodeMsg(801,"该用户未加入社团");
	public static CodeMsg ADMIN_ERROR = new CodeMsg(802,"该用户已是管理员");
	

	//后台管理类错误码
	//用户管理类错误
	public static CodeMsg LOGIN_SUCCESS = new CodeMsg(20, "登录成功");
	public static CodeMsg LEVEL_ERROR = new CodeMsg(800, "你没有权限执行该操作");
	public static CodeMsg USER_NAME_NO_EXIST = new CodeMsg(21, "该用户名不存在！");
	public static CodeMsg USERNAME_NO_EXIST = new CodeMsg(-3000, "该用户名不存在！");
	public static CodeMsg USER_PASSWORD_ERROR = new CodeMsg(22, "密码错误！");
	public static CodeMsg USER_INFO = new CodeMsg(700, "用户个人信息");
	public static CodeMsg USERS_INFO = new CodeMsg(100, "用户信息");
	public static CodeMsg MEMBERS_INFO = new CodeMsg(50, "用户个人信息");
	//注册类
	public static CodeMsg USER_INFO_EMPTY  = new CodeMsg(34, "请填写个人信息");
	public static CodeMsg User_SNO_EMPTY = new CodeMsg(34, "学号不能为空！");
	public static CodeMsg USER_SNO_IS_EXIST = new CodeMsg(31, "用户已存在");
	public static CodeMsg USER_USERNAME_EMPTY = new CodeMsg(34, "姓名不能为空");
	public static CodeMsg USER_PASSWORD_EMPTY = new CodeMsg(34, "密码不能为空！");
	public static CodeMsg User_SCOLLEGE_EMPTY = new CodeMsg(34, "学院不能为空");
	public static CodeMsg User_SEX_EMPTY = new CodeMsg(34, "性别不能为空");
	public static CodeMsg User_AGE_EMPTY = new CodeMsg(34, "年龄不能为空");
	public static CodeMsg Unknown_ERROR= new CodeMsg(101, "未知错误");
	public static CodeMsg REGISTER_SUCCESS= new CodeMsg(30, "成功");
	public static CodeMsg DELETE_USER_SUCCESS = new CodeMsg(600, "删除用户成功");
	public static CodeMsg DELETE_USER_ERROR= new CodeMsg(601, "删除用户失败");
	public static CodeMsg UPDATE_USER_SUCCESS = new CodeMsg(200, "修改用户信息成功");
	public static CodeMsg UPDATE_USER_ERROR= new CodeMsg(201, "修改用户信息失败");
	public static CodeMsg ADD_ADMIN_SUCCESS= new CodeMsg(803, "添加管理员成功");
	public static CodeMsg UPDATE_ADMIN_SUCCESS = new CodeMsg(301, "修改管理员信息成功");
	public static CodeMsg UPDATE_ADMIN_ERROR= new CodeMsg(81, "修改管理员信息失败");
	public static CodeMsg ADMIN_INFO = new CodeMsg(90, "管理员个人信息");
	public static CodeMsg DELETE_ADMIN_SUCCESS = new CodeMsg(500, "删管理员成功");
	public static CodeMsg DELETE_ADMIN_ERROR= new CodeMsg(501, "删除管理员失败");
	public static CodeMsg joinCommunity_SUCCESS = new CodeMsg(100, "申请进入社团请求发送成功");
	public static CodeMsg joinCommunity_EORROR= new CodeMsg(101, "申请进入社团请求发送失败");
	public static CodeMsg rejectJoin_SUCCESS = new CodeMsg(100, "申请进入社团请求已被拒绝");
	public static CodeMsg rejectJoin_ERROR= new CodeMsg(101, "申请进入社团请求发生错误");
	public static CodeMsg acceptJoin_SUCCESS = new CodeMsg(100, "申请进入社团请求已通过");
	public static CodeMsg acceptJoin_ERROR= new CodeMsg(101, "申请进入社团请求发生错误");



	//后台管理类错误码
	//用户管理类错误
	public static CodeMsg ADMIN_USERNAME_EMPTY = new CodeMsg(-2000, "用户名不能为空！");
	public static CodeMsg ADMIN_PASSWORD_EMPTY = new CodeMsg(-2001, "密码不能为空！");
	public static CodeMsg ADMIN_NO_RIGHT = new CodeMsg(-2002, "您所属的角色没有该权限！");
	public static CodeMsg ADMINS_INFO = new CodeMsg(400, "获取管理员信息成功！");
	public static CodeMsg ADMINS_INFO_ERROR = new CodeMsg(401, "获取管理员信息失败！");



	//登录类错误码
	public static CodeMsg ADMIN_USERNAME_NO_EXIST = new CodeMsg(-3000, "该用户名不存在！");
	public static CodeMsg ADMIN_PASSWORD_ERROR = new CodeMsg(-3001, "密码错误！");
	public static CodeMsg ADMIN_USER_UNABLE = new CodeMsg(-3002, "该用户已被冻结，请联系管理员！");
	public static CodeMsg ADMIN_USER_ROLE_UNABLE = new CodeMsg(-3003, "该用户所属角色状态不可用，请联系管理员！");
	public static CodeMsg ADMIN_USER_ROLE_AUTHORITES_EMPTY = new CodeMsg(-3004, "该用户所属角色无可用权限，请联系管理员！");
	public static CodeMsg User_Login_Success = new CodeMsg(20, "登录成功！");

	//后台菜单管理类错误码
	public static CodeMsg ADMIN_MENU_ADD_ERROR = new CodeMsg(-4000, "菜单添加失败，请联系管理员！");
	public static CodeMsg ADMIN_MENU_EDIT_ERROR = new CodeMsg(-4001, "菜单编辑失败，请联系管理员！");
	public static CodeMsg ADMIN_MENU_ID_EMPTY = new CodeMsg(-4002, "菜单ID不能为空！");
	public static CodeMsg ADMIN_MENU_ID_ERROR = new CodeMsg(-4003, "菜单ID错误！");
	public static CodeMsg ADMIN_MENU_DELETE_ERROR = new CodeMsg(-4004, "改菜单下有子菜单，不允许删除！");
	//后台角色管理类错误码
	public static CodeMsg ADMIN_ROLE_ADD_ERROR = new CodeMsg(-5000, "角色添加失败，请联系管理员！");
	public static CodeMsg ADMIN_ROLE_NO_EXIST = new CodeMsg(-5001, "该角色不存在！");
	public static CodeMsg ADMIN_ROLE_EDIT_ERROR = new CodeMsg(-5002, "角色编辑失败，请联系管理员！");
	public static CodeMsg ADMIN_ROLE_DELETE_ERROR = new CodeMsg(-5003, "该角色下存在用户信息，不可删除！");
	//后台用户管理类错误码
	public static CodeMsg ADMIN_USER_ROLE_EMPTY = new CodeMsg(-6000, "请选择用户所属角色！");
	public static CodeMsg ADMIN_USERNAME_EXIST = new CodeMsg(-6001, "该用户名已存在，请换一个试试！");
	public static CodeMsg ADMIN_USE_ADD_ERROR = new CodeMsg(-6002, "用户添加失败，请联系管理员！");
	public static CodeMsg ADMIN_USE_NO_EXIST = new CodeMsg(-6003, "用户不存在！");
	public static CodeMsg ADMIN_USE_EDIT_ERROR = new CodeMsg(-6004, "用户编辑失败，请联系管理员！");
	public static CodeMsg ADMIN_USE_DELETE_ERROR = new CodeMsg(-6005, "该用户存在关联数据，不允许删除！");

	//后台用户修改密码类错误码
	public static CodeMsg ADMIN_USER_UPDATE_PWD_ERROR = new CodeMsg(-7000, "旧密码错误！");
	public static CodeMsg ADMIN_USER_UPDATE_PWD_EMPTY = new CodeMsg(-7001, "新密码不能为空！");

	//后台用户修改密码类错误码
	public static CodeMsg ADMIN_DATABASE_BACKUP_NO_EXIST = new CodeMsg(-8000, "备份记录不存在！");

	//后台物品及分类管理类错误码
	public static CodeMsg ADMIN_GOODSCATEGORY_ADD_ERROR = new CodeMsg(-9000, "分类添加失败，请联系管理员！");
	public static CodeMsg ADMIN_GOODSCATEGORY_EDIT_ERROR = new CodeMsg(-9001, "分类编辑失败，请联系管理员！");
	public static CodeMsg ADMIN_GOODSCATEGORY_DELETE_ERROR = new CodeMsg(-9002, "该分类下存在子分类或物品信息，不允许删除，请先删除子分类或物品信息后再操作！");
	public static CodeMsg ADMIN_GOODS_NO_EXIST = new CodeMsg(-9003, "物品不存在！");
	public static CodeMsg ADMIN_GOODS_STATUS_NO_CHANGE = new CodeMsg(-9004, "物品状态没有改变！");
	public static CodeMsg ADMIN_GOODS_STATUS_ERROR = new CodeMsg(-9005, "物品状态错误！");
	public static CodeMsg ADMIN_GOODS_EDIT_ERROR = new CodeMsg(-9006, "物品状态编辑失败，请联系管理员！");
	public static CodeMsg ADMIN_GOODS_STATUS_UNABLE = new CodeMsg(-9007, "物品状态不可编辑（已出售的物品不可上架）！");
	public static CodeMsg ADMIN_GOODS_DELETE_ERROR = new CodeMsg(-9008, "该物品存在评论信息或举报信息，不允许删除，请先删除评论信息或举报信息后再操作！");

	//后台学生管理
	public static CodeMsg ADMIN_STUDENT_NO_EXIST = new CodeMsg(-9100, "学生不存在！");
	public static CodeMsg ADMIN_STUDENT_STATUS_NO_CHANGE = new CodeMsg(-9101, "学生状态未发生变化！");
	public static CodeMsg ADMIN_STUDENT_STATUS_ERROR = new CodeMsg(-9102, "学生状态错误！");
	public static CodeMsg ADMIN_STUDENT_EDIT_ERROR = new CodeMsg(-9103, "学生编辑错误，请联系管理员！");
	public static CodeMsg ADMIN_STUDENT_DELETE_ERROR = new CodeMsg(-9104, "该学生下存在关联数据（物品、求购物品、评论、举报信息等），请先删除关联数据再操作！");
	
	//后台友情链接管理
	public static CodeMsg ADMIN_NEWS_ADD_ERROR = new CodeMsg(-9200, "友情链接添加失败，请联系管理员！");
	public static CodeMsg ADMIN_NEWS_EDIT_ERROR = new CodeMsg(-9201, "友情链接编辑失败，请联系管理员！");
	//后台友情链接管理
	public static CodeMsg ADMIN_FRIENDLINK_ADD_ERROR = new CodeMsg(-9300, "友情链接添加失败，请联系管理员！");
	public static CodeMsg ADMIN_FRIENDLINK_EDIT_ERROR = new CodeMsg(-9301, "友情链接编辑失败，请联系管理员！");
	
	//网站设置
	public static CodeMsg ADMIN_SITESETTING_EDIT_ERROR = new CodeMsg(-9400, "网站设置失败，请联系管理员！");
	
	//前端用户登录注册类错误码
	public static CodeMsg HOME_STUDENT_REGISTER_SN_EXIST = new CodeMsg(-10000, "该学号已存在，请勿重复注册！");
	public static CodeMsg HOME_STUDENT_REGISTER_ERROR = new CodeMsg(-10001, "注册失败，请联系管理员！");
	public static CodeMsg HOME_STUDENT_SN_NO_EXIST = new CodeMsg(-10002, "该学号不存在！");
	public static CodeMsg HOME_STUDENT_PASSWORD_ERROR = new CodeMsg(-10003, "密码错误！");
	public static CodeMsg HOME_STUDENT_UNABLE = new CodeMsg(-10003, "该用户已被冻结，请联系管理员！");
	//前端用户中心错误码
	public static CodeMsg HOME_STUDENT_EDITINFO_ERROR = new CodeMsg(-20000, "基本信息修改失败，请联系管理员！");
	public static CodeMsg HOME_STUDENT_EDITPWD_OLD_ERROR = new CodeMsg(-20001, "原密码错误！");
	//前端用户发布物品错误码
	public static CodeMsg HOME_STUDENT_PUBLISH_ERROR = new CodeMsg(-30000, "物品发布失败，请联系管理员！");
	public static CodeMsg HOME_STUDENT_GOODS_EDIT_ERROR = new CodeMsg(-30001, "物品发布失败，请联系管理员！");
	public static CodeMsg HOME_STUDENT_GOODS_NO_EXIST = new CodeMsg(-30002, "物品不存在！");
	public static CodeMsg HOME_STUDENT_PUBLISH_CATEGORY_EMPTY = new CodeMsg(-30003, "请选择物品分类！");
	//前端用户举报物品
	public static CodeMsg HOME_STUDENT_REPORT_GOODS_ERROR = new CodeMsg(-40000, "举报失败，请联系管理员！");
	public static CodeMsg HOME_STUDENT_REPORTED_GOODS = new CodeMsg(-40001, "您已经举报过该物品，请勿重复举报！");
	public static CodeMsg HOME_STUDENT_REPORTED_NO_EXIST = new CodeMsg(-40002, "举报信息不存在！");
	//前端用户评论
	public static CodeMsg ADD_COMMENT_SUCCESSFULLY = new CodeMsg(-50000,"添加评论成功！");
	public static CodeMsg HOME_STUDENT_COMMENT_ADD_ERROR = new CodeMsg(-50001, "评论失败，请联系管理员！");
	public static CodeMsg HOME_STUDENT_COMMENT_CONTENT_EMPTY = new CodeMsg(-50002,"评论内容为空！请输入内容！");
	public static CodeMsg HOME_WRONG_STUDENT_NUMBER_FORMAT = new CodeMsg(-50003,"学号格式错误！");
	public static CodeMsg BAD_ACTIVITYID_FORMAT  = new CodeMsg(-50004,"活动号格式错误！");
	public static CodeMsg GET_COMMENTS_SUCCESSFULLY = new CodeMsg(-51000,"获取评论列表成功！");
	public static CodeMsg GET_COMMENTS_EMPTY = new CodeMsg(-51001,"获取评论列表成功！但是没有相关记录！");
	public static CodeMsg GET_COMMENTS_FAILED = new CodeMsg(-51002,"获取评论列表失败！");
	public static CodeMsg DELETE_COMMENT_SUCCESSFULLY = new CodeMsg(-52000,"删除评论成功！");
	public static CodeMsg DELETE_COMMENT_ERROR = new CodeMsg(-52001,"删除评论失败！");
	//前端用户加入社团
	public static CodeMsg APPLY_JOINED_SUCCESSFULLY = new CodeMsg(-71000,"申请加入成功！");
	public static CodeMsg APPLY_JOINED_FAILED = new CodeMsg(-71001,"申请加入失败！");

	//后台管理员公告操作
	public static CodeMsg ADD_NOTICE_SUCCESSFULLY = new CodeMsg(-53000,"添加公告成功！");
	public static CodeMsg ADD_NOTICE_FAILED = new CodeMsg(-53001,"添加公告失败！");
	public static CodeMsg DELETE_NOTICE_SUCCESSFULLY = new CodeMsg(-54000,"删除公告成功！");
	public static CodeMsg DELETE_NOTICE_FAILED = new CodeMsg(-54001,"删除公告失败！");
	public static CodeMsg UPDATE_NOTICE_SUCCESSFULLY = new CodeMsg(-55000,"更新公告成功！");
	public static CodeMsg UPDATE_NOTICE_FAILED = new CodeMsg(-55001,"更新公告失败！");
	public static CodeMsg QUERY_NOTICE_SUCCESSFULLY = new CodeMsg(-56000,"查询公告成功！");
	public static CodeMsg QUERY_NOTICE_NOT_EXIST = new CodeMsg(-56001,"无公告记录！");
	//后台管理员活动操作
	public static CodeMsg ADD_ACTIVITY_SUCCESSFULLY = new CodeMsg(-60000,"添加活动成功！");
	public static CodeMsg ADD_ACTIVITY_FAILED = new CodeMsg(-60001,"添加活动失败！");
	public static CodeMsg DELETE_ACTIVITY_SUCCESSFULLY = new CodeMsg(-61000,"删除活动成功！");
	public static CodeMsg DELETE_ACTIVITY_FAILED = new CodeMsg(-61001,"删除活动失败！");
	public static CodeMsg UPDATE_ACTIVITY_SUCCESSFULLY = new CodeMsg(-62000,"更新活动成功！");
	public static CodeMsg UPDATE_ACTIVITY_FAILED = new CodeMsg(-62001,"更新活动失败！");
	public static CodeMsg QUERY_ACTIVITY_SUCCESSFULLY = new CodeMsg(-64000,"查询活动成功！");
	public static CodeMsg QUERY_ACTIVITY_NOT_EXIST= new CodeMsg(-64001,"无活动记录！");
}
