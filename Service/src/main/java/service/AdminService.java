package service;

import entity.Admin;
import entity.User;
import mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminMapper adminMapper;
   public Admin  adminLogin(String adName,String adPassword){
       return  adminMapper.adminLogin( adName,adPassword);
   }
   public int addAdmin(User user){
       return adminMapper.addAdmin(user);
   }
    public int deleteAdmin(String adNo){
       return adminMapper.deleteAdmin(adNo);
    }
    public int updateAdmin(Admin admin){
       return adminMapper.updateAdmin(admin);
    }
    public  Admin findByAdminNO(String adNo){
       return adminMapper.findByAdminNO(adNo);
    }
    public List<Admin> findAllAdmin(){return adminMapper.findAllAdmin();}
}
