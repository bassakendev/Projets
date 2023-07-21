package calculatrice;

public class Etudiant {
    
    public String mat;
    public String nom;
    public int age;

    public Etudiant(String m,String n,int a){
        this.mat=m;
        this.nom=n;
        this.age=a;
    }
    public void Afficher() {
        System.out.println("Matricule : "+this.mat+"  Nom: "+this.nom+"  Age: "+this.age);
    }
}
