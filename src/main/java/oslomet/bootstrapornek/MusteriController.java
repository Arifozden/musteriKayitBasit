package oslomet.bootstrapornek;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MusteriController {
    public final List<Musteri>tumMusteriler = new ArrayList<>();

    @GetMapping("/kaydet")
    public void musteriKayit(Musteri musteriGir){
        tumMusteriler.add(musteriGir);
    }

    @GetMapping("/hepsiniGetir")
    public List<Musteri>
    hepsiniGetir(){
        return tumMusteriler;
    }

    @GetMapping("/hepsiniSil")
    public void hepsiniSil(){
        tumMusteriler.clear();
    }
}
